﻿//------------------------------------------------------------
// All Rights Reserved , Copyright (C)  
// 版本：1.0
/// <author>
///		<name></name>
///		<date>0001/1/1 0:00:00</date>
/// </author>
//------------------------------------------------------------

using DM.UBP.EF;
using DM.UBP.Domain.Entity.ReportManager;

namespace DM.UBP.Domain.EntityConfiguration.OracleDevart.ReportManager
{
    /// <summary>
    /// 报表数据源基于数据库—OracleDevart的映射
    /// <summary>
    public class ReportDataSourceConfiguration : EntityConfigurationBase<ReportDataSource, long>
    {
        public ReportDataSourceConfiguration()
        {
            this.ToTable("RPT_DATASOURCE");
            this.Property(p => p.Id).HasColumnName("SOURCE_ID");
        }
    }
}
